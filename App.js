import React from 'react';


import{globalStyles} from 'global';

//importando componentes
import Header from './components/Header';
import Footer from './components/footer';
import Home from './components/Home';
import About from './components/About'
import services from './components/contact';
import contact from './components/contact';
import { SafeAreaView, ScrollView } from 'react-native';

export default function App ()
  const [pagina, setPagina ]= useState ('home');
  
  //função para rederizar a tela com base na pagina atual
  const renderPage = () => {
    switch (pagina){
    case 'nome':
      return <home />;
    case 'sobre':
      return <About/>;
    case 'servicos':
      return <services/>;
    case 'contato':
      return <contact />;
    default:
      return <home/>;
 }
};

return(
  <SafeAreaView style={globalStyles.container}>
    <header pagina ={pagina} setPagina={setPagina} />
    <ScrollView contentContainerStyle={globalStyles.content}>
      {renderPage()}
    </ScrollView>
  </SafeAreaView>
);