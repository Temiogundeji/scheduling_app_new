import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import AppointmentCard from '../components/AppointmentCard';

const Appointments = () => {
    return (
            <ScrollView>
                <Layout style={[{ flex: 1 }, styles.cardPadding]}>
                    <Text style={styles.heading}>My Appointments</Text>
                    <AppointmentCard time_of_appointment="4:30pm" complaint="I am having malaria, and I need serious intervention." doctor_name="Dr. jesusina"  date="1/1/2020" />
                    <AppointmentCard time_of_appointment="4:30pm" complaint="I am having malaria, and I need serious intervention." doctor_name="Dr. Adebesin"  date="1/1/2020" />
                    <AppointmentCard time_of_appointment="4:30pm" complaint="I am having malaria, and I need serious intervention." doctor_name="Dr. Ajagbe"  date="1/1/2020" />
                </Layout>
            </ScrollView>
                
            );
}

export default Appointments;

const styles = StyleSheet.create({
    cardPadding: {
        padding: 20
    },
    heading:{
        marginTop: 20,
        marginBottom: 20,
        fontSize: 22,
        fontWeight: 'bold'
    }
});