import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Layout, Text, Button } from '@ui-kitten/components';



const Header = (props) => (
    <View>
        <Layout>
<Text category='h6'>{props.doctor_name}</Text>
            <Text category='s2'>{props.date}</Text>
        </Layout>
        <Layout>    
            <Text category='h6'>{props.patient_name}</Text>
<Text category='s2'>{props.time_of_appointment}</Text>
        </Layout>
    </View>
  );
  
  const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button
        style={styles.footerControl}
        size='small'
        disabled={true}
        status='basic'>
        PENDING
      </Button>
    </View>
  );
  
const AppointmentCard = (props) => {
    return (
        <Card style={styles.card} status="warning">
             <View>
                <Layout>
                    <View style={styles.container}>
                        <Text style={styles.boldText} category='h6'>
                            Doctor's Name: 
                        </Text>
                        <Text category='h6'>
                            {props.doctor_name}
                        </Text>
                    </View>
                    <Text style={{fontWeight: 'bold'}} category='s2'>{props.date}</Text>
                </Layout>
                <Layout>    
                    <Text category='h6'>{props.patient_name}</Text>
                    <Text category='s2'>{props.time_of_appointment}</Text>
                </Layout>
            </View>
            <View style={styles.card_body}>
                <Text >{props.complaint} </Text>
            </View>
            <View {...props} style={[props.style, styles.footerContainer]}>
                <Button
                    style={styles.footerControl}
                    size='small'
                    disabled={true}
                    status='basic'>
                    PENDING
                </Button>
            </View>
        </Card>
    );
}

export default AppointmentCard;

const styles = StyleSheet.create({
    
    card: {
        // margin: 2,
        width:'100%',
        marginBottom: 50
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow:{
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: 'grey',
        shadowOpacity: 0.2
    },
    card_body:{
        marginTop: 20,
        marginBottom: 20
    },
    boldText: {
        fontWeight: '600'
    }
});