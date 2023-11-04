import React, { Fragment } from 'react'
import { Image, Text, View, Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import logo from './Logo.png'

  
  const Invoice = () => {


    const reciept_data = {
        "id": "642be0b4bbe5d71a5341dfb1",
        "invoice_no": "20200669",
        "address": "739 Porter Avenue, Cade, Missouri, 1134",
        "date": "24-09-2019",
        "items": [
          {
            "id": 1,
            "desc": "do ex anim quis velit excepteur non",
            "qty": 8,
            "price": 179.25
          },
          {
            "id": 2,
            "desc": "incididunt cillum fugiat aliqua Lorem sit Lorem",
            "qty": 9,
            "price": 107.78
          },
          {
            "id": 3,
            "desc": "quis Lorem ad laboris proident aliqua laborum",
            "qty": 4,
            "price": 181.62
          },
          {
            "id": 4,
            "desc": "exercitation non do eu ea ullamco cillum",
            "qty": 4,
            "price": 604.55
          },
          {
            "id": 5,
            "desc": "ea nisi non excepteur irure Lorem voluptate",
            "qty": 6,
            "price": 687.08
          }
        ]
      }
     
    const commonStyles = {
    card: {padding: 24, backgroundColor: '#ffffff', borderRadius: 16},
    aboutColumn: {flexDirection: 'column', alignItems: 'flex-start'},
    }

    const styles = StyleSheet.create({
        page: { fontSize: 11,paddingTop: 20,paddingLeft: 40,paddingRight: 40,lineHeight: 1.5,flexDirection: 'column', backgroundColor: '#F3F5FB' },

        titleContainer: {flexDirection: 'row',marginTop: 24},
        
        logo: { width: 90 },

        reportTitle: {  fontSize: 16,  textAlign: 'center' },

        addressTitle : {fontSize: 11,fontStyle: 700}, 
        
        invoice : {fontWeight: 700,fontSize: 20},
        
        invoiceNumber : {fontSize: 11,fontWeight: 700}, 
        
        address : { fontWeight: 700, fontSize: 10},
        
        theader : {marginTop : 20,fontSize : 10,fontStyle: 700,paddingTop: 4 ,paddingLeft: 7 ,flex:1,height:20,backgroundColor : '#DEDEDE',borderColor : 'whitesmoke',borderRightWidth:1,borderBottomWidth:1},

        theader2 : { flex:2, borderRightWidth:0, borderBottomWidth:1},

        tbody:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1, borderColor : 'whitesmoke', borderRightWidth:1, borderBottomWidth:1},

        total:{ fontSize : 9, paddingTop: 4 , paddingLeft: 7 , flex:1.5, borderColor : 'whitesmoke', borderBottomWidth:1},

        tbody2:{ flex:2, borderRightWidth:1, },


        header: {flexDirection: 'row',marginTop: 24, ...commonStyles.card},
        headerLogo: { fontFamily : "Manrope",width: 90, marginRight: 16, },
        headerContent: { width: "100%", flexDirection: 'column', alignItems: 'flex-start' },
        fio : { fontWeight: 700, fontSize: 16},
        headerDescription : { fontSize: 10},

        about: {...commonStyles.card, display: 'flex', flexDirection: 'row', gap: 10, marginTop: 24, },
        aboutLeft: {...commonStyles.aboutColumn},
        aboutRight: {...commonStyles.aboutColumn},
        blockTitle: { fontFamily : "Manrope", fontWeight: 700, fontSize: 20},
        aboutFeild: { display: 'flex', flexDirection: 'row', gap: 10},
        aboutFeildTitle: {fontFamily : "Manrope", color: 'red', fontSize: 12},
        aboutFeildValue: {fontFamily : "Manrope", color: '#000000', fontSize: 14},
    });

    const Header = () => (
        <View style={styles.header}>
            <Image style={styles.headerLogo} src={logo} />
            <View style={styles.headerContent}>
                <Text style={styles.fio}>Ivanov Ivan</Text>
                <Text style={styles.headerDescription}>Xpress Fron Developer</Text>
            </View>
        </View>
    );

    const About = () => (
        <View style={styles.about}>
            <View style={styles.aboutLeft}>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Возраст</Text>
                    <Text style={styles.aboutFeildValue}>30 лет</Text>
                </View>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Пол</Text>
                    <Text style={styles.aboutFeildValue}>Мужской</Text>
                </View>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Проживание</Text>
                    <Text style={styles.aboutFeildValue}>Москва</Text>
                </View>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Формат работы</Text>
                    <Text style={styles.aboutFeildValue}>Удаленка, Офис</Text>
                </View>
            </View>
            <View style={styles.aboutRight}>
                <Text style={styles.blockTitle}>Котакты</Text>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Почта</Text>
                    <Text style={styles.aboutFeildValue}>testtttt@test.tt</Text>
                </View>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Телефон</Text>
                    <Text style={styles.aboutFeildValue}>+79098887766</Text>
                </View>
            </View>
        </View>
    );

    const Stack = () => (
        <View style={styles.about}>
            <View style={styles.aboutLeft}>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Возраст</Text>
                    <Text style={styles.aboutFeildValue}>30 лет</Text>
                </View>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Пол</Text>
                    <Text style={styles.aboutFeildValue}>Мужской</Text>
                </View>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Проживание</Text>
                    <Text style={styles.aboutFeildValue}>Москва</Text>
                </View>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Формат работы</Text>
                    <Text style={styles.aboutFeildValue}>Удаленка, Офис</Text>
                </View>
            </View>
            <View style={styles.aboutRight}>
                <Text style={styles.blockTitle}>Котакты</Text>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Почта</Text>
                    <Text style={styles.aboutFeildValue}>testtttt@test.tt</Text>
                </View>
                <View style={styles.aboutFeild}>
                    <Text style={styles.aboutFeildTitle}>Телефон</Text>
                    <Text style={styles.aboutFeildValue}>+79098887766</Text>
                </View>
            </View>
        </View>
    );

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Header  />
                <About/>
                <Stack/>
            </Page>
        </Document>
          
    )
}

export default Invoice