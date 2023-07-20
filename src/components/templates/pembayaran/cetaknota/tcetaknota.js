import React, {Component} from 'react';
import {ActivityIndicator,
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Modal,
    Alert,
    ScrollView,
    DeviceEventEmitter,
    NativeEventEmitter,
    Switch,
    TouchableOpacity,
    Dimensions,
    ToastAndroid} from 'react-native';
import {BluetoothEscposPrinter, BluetoothManager, BluetoothTscPrinter} from "react-native-bluetooth-escpos-printer";
import Tcetaknotaprint from "./tcetaknotaprint";
// import Tsc from "./tsc";

var {height, width} = Dimensions.get('window');

export default class Tcetaknota extends Component {


    _listeners = [];

    constructor() {
        super();
        this.state = {
            devices: null,
            pairedDs:[],
            foundDs: [],
            modalOpen : true,
            bleOpend: false,
            loading: true,
            boundAddress: '',
            debugMsg: ''
        }
    }

    componentDidMount() {//alert(BluetoothManager)
        BluetoothManager.isBluetoothEnabled().then((enabled)=> {
            this.setState({
                bleOpend: Boolean(enabled),
                loading: false
            })
        }, (err)=> {
            err
        });

        if (Platform.OS === 'ios') {
            let bluetoothManagerEmitter = new NativeEventEmitter(BluetoothManager);
            this._listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED,
                (rsp)=> {
                    this._deviceAlreadPaired(rsp)
                }));
            this._listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_DEVICE_FOUND, (rsp)=> {
                this._deviceFoundEvent(rsp)
            }));
            this._listeners.push(bluetoothManagerEmitter.addListener(BluetoothManager.EVENT_CONNECTION_LOST, ()=> {
                this.setState({
                    name: '',
                    boundAddress: ''
                });
            }));
        } else if (Platform.OS === 'android') {
            this._listeners.push(DeviceEventEmitter.addListener(
                BluetoothManager.EVENT_DEVICE_ALREADY_PAIRED, (rsp)=> {
                    this._deviceAlreadPaired(rsp)
                }));
            this._listeners.push(DeviceEventEmitter.addListener(
                BluetoothManager.EVENT_DEVICE_FOUND, (rsp)=> {
                    this._deviceFoundEvent(rsp)
                }));
            this._listeners.push(DeviceEventEmitter.addListener(
                BluetoothManager.EVENT_CONNECTION_LOST, ()=> {
                    this.setState({
                        name: '',
                        boundAddress: ''
                    });
                }
            ));
            this._listeners.push(DeviceEventEmitter.addListener(
                BluetoothManager.EVENT_BLUETOOTH_NOT_SUPPORT, ()=> {
                    ToastAndroid.show("Device Not Support Bluetooth !", ToastAndroid.LONG);
                }
            ))
        }
    }

    componentWillUnmount() {
        //for (let ls in this._listeners) {
        //    this._listeners[ls].remove();
        //}
    }

    _deviceAlreadPaired(rsp) {
        var ds = null;
        if (typeof(rsp.devices) == 'object') {
            ds = rsp.devices;
        } else {
            try {
                ds = JSON.parse(rsp.devices);
            } catch (e) {
            }
        }
        if(ds && ds.length) {
            let pared = this.state.pairedDs;
            pared = pared.concat(ds||[]);
            this.setState({
                pairedDs:pared
            });
        }
    }

    _deviceFoundEvent(rsp) {//alert(JSON.stringify(rsp))
        var r = null;
        try {
            if (typeof(rsp.device) == "object") {
                r = rsp.device;
            } else {
                r = JSON.parse(rsp.device);
            }
        } catch (e) {//alert(e.message);
            //ignore
        }
        //alert('f')
        if (r) {
            let found = this.state.foundDs || [];
            if(found.findIndex) {
                let duplicated = found.findIndex(function (x) {
                    return x.address == r.address
                });
                //CHECK DEPLICATED HERE...
                if (duplicated == -1) {
                    found.push(r);
                    this.setState({
                        foundDs: found
                    });
                }
            }
        }
    }
    showAlert = () =>
    Alert.alert(
        "Pemberitahuan",
        "Bluetooth Berhasil Tersambubg",
        [
        {
            text: "Ok",
            onPress: () => this.props.navigation.navigate('Settingprinter') ,
            style: "cancel",
        },
        ],
       
    );
    _renderRow(rows){
        let items = [];
        for(let i in rows){
            let row = rows[i];
            if(row.address) {
                items.push(
                    <TouchableOpacity key={new Date().getTime()+i} style={styles.wtf} onPress={()=>{
                    this.setState({
                        loading:true
                    });
                    BluetoothManager.connect(row.address)
                        .then((s)=>{
                            this.setState({
                                loading:false,
                                boundAddress:row.address,
                                name:row.name || "UNKNOWN"
                            })
                            this.showAlert();
                        },(e)=>{
                            this.setState({
                                loading:false
                            })
                            this.props.navigation.navigate('Tcetaknota');
                            alert(e);
                        })

                }}><Text style={styles.name}>{row.name || "UNKNOWN"}</Text><Text
                        style={styles.address}>{row.address}</Text></TouchableOpacity>
                );
            }
        }
        return items;
    }

    render() {
        
        return (
                
                        <View style={{ flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24, paddingVertical: 24}}>
                        <Text>{this.state.debugMsg}</Text>
                        <Text style={styles.title}>Status Bluetooth = {this.state.bleOpend?"ON":"OFF"} (Aktifkan Bluetooth untuk mencari driver printer)</Text>
                        <View>
                        <Switch value={this.state.bleOpend} onValueChange={(v)=>{
                        this.setState({
                            loading:true
                        })
                        if(!v){
                            BluetoothManager.disableBluetooth().then(()=>{
                                this.setState({
                                    bleOpend:false,
                                    loading:false,
                                    foundDs:[],
                                    pairedDs:[]
                                });
                            },(err)=>{alert(err)});

                        }else{
                            BluetoothManager.enableBluetooth().then((r)=>{
                                var paired = [];
                                if(r && r.length>0){
                                    for(var i=0;i<r.length;i++){
                                        try{
                                            paired.push(JSON.parse(r[i]));
                                        }catch(e){
                                            //ignore
                                        }
                                    }
                                }
                                this.setState({
                                    bleOpend:true,
                                    loading:false,
                                    pairedDs:paired
                                })
                            },(err)=>{
                                this.setState({
                                    loading:false
                                })
                                alert(err)
                            });
                        }
                    }}/>
                            <Button disabled={this.state.loading || !this.state.bleOpend} onPress={()=>{
                                this._scan();
                            }} title="Scan Driver Printer"/>
                        </View>
                        <ScrollView >
                            <Text  style={styles.title}>List Terbaru (klik perangkat untuk menghubungkan)</Text>
                                {this.state.loading ? (<ActivityIndicator animating={true}/>) : null}
                                <View style={{flex:1,flexDirection:"column"}}>
                                {
                                    this._renderRow(this.state.foundDs)
                                }
                                </View>
                            <Text  style={styles.title}>List tersedia:</Text>
                            {this.state.loading ? (<ActivityIndicator animating={true}/>) : null}
                            <View style={{flex:1,flexDirection:"column"}}>
                            {
                                this._renderRow(this.state.pairedDs)
                            }
                            </View>
                        </ScrollView>
                    </View>
        );
    }

    _selfTest() {
        this.setState({
            loading: true
        }, ()=> {
            BluetoothEscposPrinter.selfTest(()=> {
            });

            this.setState({
                loading: false
            })
        })
    }

    _scan() {
        this.setState({
            loading: true
        })
        BluetoothManager.scanDevices()
            .then((s)=> {
                var ss = s;
                var found = ss.found;
                try {
                    found = JSON.parse(found);//@FIX_it: the parse action too weired..
                } catch (e) {
                    //ignore
                }
                var fds =  this.state.foundDs;
                if(found && found.length){
                    fds = found;
                }
                this.setState({
                    foundDs:fds,
                    loading: false
                });
            }, (er)=> {
                this.setState({
                    loading: false
                })
                //alert('error' + JSON.stringify(er));
            });
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    title:{
        width:width,
        backgroundColor:"#eee",
        color:"#232323",
        paddingLeft:8,
        paddingVertical:4,
        textAlign:"left"
    },
    wtf:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    name:{
        flex:1,
        textAlign:"left"
    },
    address:{
        flex:1,
        textAlign:"right"
    }
});