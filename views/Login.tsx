
import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../store/actions'
import Firebase from '../store/firebase'
import ButtonPrimary from '../components/ButtonPrimary'
import Icons from '../components/Icons'

class Login extends React.Component {
    handleLogin = () => {
        this.props.login()
        this.props.navigation.navigate('Recap')
    }
    componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getUser(user.uid)
                if (this.props.user != null) {
                    this.props.navigation.navigate('Recap')
                }
            }
        })
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
                <ButtonPrimary  onPress={() => this.props.login()} title="Login">

            </ButtonPrimary>
</View></View>
        )
    }
    
}

const styles = StyleSheet.create({
    logoContainer: {
        paddingVertical:"10%",
        height:"30%",
        width:"100%"
    },
    containerButton: {
        width:"100%",
        paddingHorizontal:"10%",
        paddingTop:"10%",
        paddingBottom:"5%"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%"
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
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%'
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
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)