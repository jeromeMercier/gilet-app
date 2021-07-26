import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import Firebase from '../store/firebase'
import { withNavigation } from 'react-navigation';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup } from '../store/actions'
import Icons from '../components/Icons';
import ButtonPrimary from '../components/ButtonPrimary';


class Signup extends React.Component {
    handleSignUp = () => {
        this.props.signup()
        this.props.navigation.navigate('recap')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
        <Icons name="logoGDORbAw"></Icons>
        </View>
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.email}
                    onChangeText={email => this.props.updateEmail(email)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.props.user.password}
                    onChangeText={password => this.props.updatePassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <View style={styles.containerButton}>
                <ButtonPrimary title="Signup" onPress={this.handleSignUp}>
                    
                </ButtonPrimary>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoContainer: {
        paddingVertical:"10%",
        height:"30%",
        width:"100%"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 20,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,

        fontFamily:'Euro-Bold'
    },
    containerButton: {
        width:"100%",
        paddingHorizontal:"10%",
        paddingTop:"10%",
        paddingBottom:"5%"
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)