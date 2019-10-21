import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RequireId from '../auth/id';

/* 
    Tela simples com texto inicio e um botão que redireciona para a 
    rota que precisa de autenticação;

    A função (this.props.history.push('/user')) utiliza uma propriedade 
    da estrutura de rotas que redireciona para a rota 'user'
*/
export default class Home extends Component {

    state = { auth: false }
    render() {
        return !this.state.auth ? <RequireId history={this.props.history} handlePopupDismissed={() => this.setState({auth: true})} /> 
        : (
            <View style={styles.container}>
                <Text style={styles.header}>Autenticação feita com sucesso</Text>
                <TouchableOpacity
                    style={{ paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, borderWidth:1, borderColor: "#000022"  }}
                    onPress={() => this.setState({ auth: false })} >
                    <Text>Autenticar</Text>
                </TouchableOpacity>
            </View>         
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        textAlign: "center",
        fontSize: 20,
        color: "#090",
        marginVertical: 20,

    }
});
