import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Platform, Alert, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { Layout, Input, Button, Icon, Spinner, Avatar, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { StyleSheet } from "react-native";

import { register } from "../actions/registerAction"
import { Formik } from 'formik';
import * as yup from 'yup';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import "react-native-gesture-handler";
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../shared/global';

const registerSchema = yup.object({
    p_firstname: yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too long')
    .required('Required'),
    p_lastname: yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too long')
    .required('Required'),
    email: yup.string()
    .email('Invalid email')
    .required('Required'),
    genotype: yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too long')
    .required('Required'),
    blood_group: yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too long')
    .required('Required'),
    frequent_ailment: yup.string()
    .min(5, 'Too Short!')
    .max(20, 'Too long')
    .required('Required')
})

// const UserIcon = (props) => {
//   return <Icon name='user' {...props} />
// };

const useInputState = (initialValue) => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};

const RegisterScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const mediumInputState = useInputState();

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [selectedGenoIndex, setGenoSelectedIndex] = React.useState(new IndexPath(0));
    const [selectedBgIndex, setBgSelectedIndex] = React.useState(new IndexPath(0));
    // const [image, setImage] = useState(null);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };  

    const [passportUri, setPassport] = useState(null);
        
    const [imageError, setImageError] = useState(false);

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
      );
   ;
    const getPermissionAsync = async () => {
        if(Constants.platform.ios){
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status !== "granted"){
                Alert.alert("Sorry, we need camera roll permission to make this work!");
                const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            }

            await Permissions.askAsync(Permissions.CAMERA);
        }
    }

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });

            if(!result.cancelled){
                setPassport(result.uri)
            }
            else{
                setImageError(true);
            }
        }
        catch(err){
            setImageError(true);
            console.log(err);
        }
    }

    const triggerImagePicker = () => {
        getPermissionAsync();
        pickImage();
    }

    const successResponsecallback = () => {
        setSpin(false);
        // navigation.navigate('HomeScreen');
    }

   
    return (
        <Formik
            initialValues={{
                p_firstname: '',
                p_lastname: '',
                email: '',
                password: '',
                genotype: '',
                blood_group: '',
                frequent_ailment: ''
            }}
            onSubmit={(values) => {
                    Alert.alert('Dont be stupid');
                // dispatch(register({userData: values}))
                // if(passportUri){
                //     dispatch(register({ userData: values },
                //         successResponsecallback
                //     ))
                // }
            }}

            validationSchema={registerSchema}
        >
            {(props) => {
                return (
                    <ScrollView>
                       <Layout style={{flex:1, justifyContent: 'flex-start' }}>
                            <Layout style={{ padding: 30, backgroundColor: 'transparent'}}>
                                <View>
                                    <Text style={styles.header}>The Easiest way to schedule an appointment with a doctor.</Text>
                                </View>
                                <View>
                                <Text style={styles.label}>First Name</Text>
                                    <Input
                                        style={styles.fieldStyle, {borderColor: props.errors.email && props.touched.p_firstname ? globalStyles.borderDanger : null }}
                                        size='large'
                                        {...mediumInputState}
                                        placeholder='eve'
                                        value={props.values.p_firstname}
                                        onChangeText={props.handleChange('p_firstname')}
                                        onBlur={props.handleBlur('p_firstname')}>
                                    </Input>
                                    <Text style={styles.label}>Last Name</Text>
                                    <Input
                                        style={styles.fieldStyle, {borderColor: props.errors.email && props.touched.p_lastname ? globalStyles.borderDanger : null }}
                                        size='large'
                                        {...mediumInputState}
                                        placeholder='adam'
                                        value={props.values.p_lastname}
                                        onChangeText={props.handleChange('p_lastname')}
                                        onBlur={props.handleBlur('p_lastname')}
                                    >
                                    </Input>
                                    <Text style={styles.label}>Email</Text>
                                    <Input
                                        style={styles.fieldStyle, {borderColor: props.errors.email && props.touched.p_img ? globalStyles.borderDanger : null }}
                                        size='large'
                                        {...mediumInputState}
                                        placeholder='adam@eve@gmail.com'
                                        value={props.values.email}
                                        onChangeText={props.handleChange('email')}
                                        onBlur={props.handleBlur('email')}
                                    >

                                    {/* Profile Image Uploader */}

                                    

                                    </Input>
                                    <Text style={styles.label}>Password</Text>
                                    <Input
                                        style={styles.fieldStyle, {borderColor:props.errors.email && props.touched.email ? globalStyles.borderDanger : null }}
                                    size='large'
                                    {...mediumInputState}
                                    value={props.values.password}
                                    placeholder='Your password'
                                    accessoryRight={renderIcon}
                                    secureTextEntry={secureTextEntry}
                                    onChangeText={props.handleChange('password')}
                                    onBlur={props.handleBlur('password')}
                                    >
                                    </Input>
                                    <View>
                                        <Button
                                        size="small"
                                             style={[{backgroundColor: '#000', color: '#FF7F36'},
                                             imageError ? globalStyles.borderDanger : null,
                                             {
                                                 alignItems: 'center',
                                                 marginVertical: 10,
                                                 justifyContent: "flex-start",
                                                 borderColor:'none'
                                             }
                                            ]
                                            }
                                            onPress={triggerImagePicker}
                                        >
                                        {!passportUri && (
                                                    // <UserIcon />
                                                    <Text>No Image</Text>
                                                )}
                                                {passportUri && (
                                                <>
                                                    <Avatar
                                                    source={{ uri: passportUri }}
                                                    style={{ width: 40, height: 40 }}
                                                    />
                                                </>
                                                )}
                                                <Text>Select an Image</Text>
                                        </Button>
                                    </View>
                                    <Text style={styles.label}>Genotype</Text>
                                    <Select
                                        placeholder="AA"
                                       style= {styles.fieldStyle, {borderColor:props.errors.email && props.touched.email ? globalStyles.borderDanger : null }}
                                        value={props.values.genotype}
                                        selectedIndex={selectedGenoIndex}
                                        size="large"
                                        onSelect={i => setGenoSelectedIndex(i)}>
                                        <SelectItem title='AA'/>
                                        <SelectItem title='AS'/>
                                        <SelectItem title='AC'/>
                                        <SelectItem title='SS'/>
                                        <SelectItem title='CS'/>
                                    </Select>
                                    <Text style={styles.label}>Blood Group</Text>
                                    <Select
                                         style= {styles.fieldStyle, {borderColor:props.errors.email && props.touched.email ? globalStyles.borderDanger : null }}
                                        selectedIndex={selectedBgIndex}
                                        value={props.values.blood_group}
                                        size='large'
                                        onSelect={index => setBgSelectedIndex(index)}>
                                        <SelectItem title='O+'/>
                                        <SelectItem title='O-'/>
                                        <SelectItem title='B+'/>
                                        <SelectItem title='B-'/>
                                        <SelectItem title='AB'/>
                                    </Select>
                                    <Text style={styles.label}>Frequent Ailment</Text>
                                    <Input
                                        style={styles.fieldStyle, {borderColor: props.errors.email && props.touched.frequent_ailment ? globalStyles.borderDanger : null }}
                                        size='large'
                                        {...mediumInputState}
                                        placeholder='Fever'
                                        value={props.values.frequent_ailment}
                                        onChangeText={props.handleChange('frequent_ailment')}
                                        onBlur={props.handleBlur('frequent_ailment')}
                                    ></Input>
                                </View>
                                <Button onPress={props.handleSubmit} style={[styles.submitButton, {marginTop: 20}]}><Text>REGISTER</Text></Button>
                            </Layout>
                        </Layout> 
                    </ScrollView>
                )
            }}
        </Formik>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    input: {
      marginVertical: 2,
    },
    fieldStyle:{ 
      marginBottom: 5,
      fontSize:20,
      borderColor: '#FF7F36'
    },
    labelText:{
      fontSize: 14,
      color: '#fff',
      fontWeight: '500',
      marginBottom: 10
    },
    submitButton:{
        backgroundColor: '#FF7F36',
        borderColor: '#FF7F36'
    },
    label: {
        marginBottom:5,
        fontWeight: '700'
    },
    icon: {
        width: 32,
        height: 32,
    },
    layout: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: { 
      marginBottom: 30,
       fontSize: 21,
       color: '#FF7F36',
       fontWeight:'700',
       lineHeight:31
    }
  });
  
  