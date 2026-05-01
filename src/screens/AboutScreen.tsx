import {ScrollView, View, Text, TouchableOpacity, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        maxWidth: '80%',
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    parag:{
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
    },
    paragOPA:{
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 24,
        fontWeight: 'bold',
    },
    listContainer: {
        width: '100%',
        alignSelf: 'stretch',
        paddingLeft: 10,
        marginTop: 10,
    },
    listItem: {
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 24,
        marginBottom: 8,
    },
});

export default function AboutScreen(){
    return(
        <ScrollView style={styles.container}>

        <view style={styles.center}>
            <img src="" alt="" />
            </view>
            <View style={styles.center}>
                <Text style={styles.title}>
                    Seu dinheiro, sem complicação
                </Text>
                <Text style={styles.parag}>
                    A gente acredita que controlar a vida financeira não precisa ser difícil, nem cheio de termos complicados.
                </Text>
            </View>

            
            <View style={styles.center}>
                <Text style={styles.title}>
                    Quem somos
                </Text>
                <Text style={styles.parag}>
                    Somos uma equipe que já cansou de ver pessoas inteligentes se sentindo perdidas com o próprio dinheiro. </Text>
                    <Text style={styles.parag}>
Criamos este app para transformar controle financeiro em algo simples, visual e acessível — do jeito que deveria ser desde o começo.
                </Text>
            </View>

            <View style={styles.center}>
                <Text style={styles.title}>
                    O problema que queremos resolver
                </Text>
                <Text style={styles.parag}>
                    A maioria das pessoas não tem falta de esforço — tem falta de clareza.
                </Text>
                <Text style={styles.parag}>
                    Planilhas confusas, aplicativos complexos e pouca educação financeira acabam afastando quem mais precisa de controle.
                </Text>
            </View>

            <View style={styles.center}>
                <Text style={styles.title}>
                    Nossa missão
                </Text>
                <Text style={styles.paragOPA}>
                    Dar às pessoas controle real sobre o próprio dinheiro, sem complicação.
                </Text>
                <Text style={styles.parag}>
                    Queremos que você entenda para onde seu dinheiro vai — e tome decisões com segurança.
                </Text>
            </View>

            <View style={styles.center}>
                <Text style={styles.title}>
                    Como fazemos isso
                </Text>
                <View style={styles.listContainer}>
                    <Text style={styles.listItem}>• Interface simples e intuitiva</Text>
                    <Text style={styles.listItem}>• Visualização clara de gastos</Text>
                    <Text style={styles.listItem}>• Insights que fazem sentido (sem “economês”)</Text>
                    <Text style={styles.listItem}>• Foco no dia a dia real, não em teorias</Text>
                </View>
            </View>

            <View style={styles.center}>
                <Text style={styles.title}>
                    Nossos valores
                </Text>
                <View style={styles.listContainer}>
                    <Text style={styles.listItem}>• Transparência – nada de surpresas ou taxas escondidas</Text>
                    <Text style={styles.listItem}>• Respeito – tratamos todos com dignidade e consideração</Text>
                    <Text style={styles.listItem}>• Autonomia – você no controle, sempre</Text>
                    <Text style={styles.listItem}>• Confiança – seus dados são tratados com responsabilidade</Text>
                </View>
            </View>

        </ScrollView>
    )
}

