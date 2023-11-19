import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const App = () => {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const initialValues = {
    passwordLength: '',
    isLowerCase: false,
    isUpperCase: false,
    isNumber: false,
    isSymbols: false
  }

  const validationSchema = Yup.object().shape({
    passwordLength: Yup
      .number()
      .required("Password Length is Required.")
      .min(4, 'Should be min of 4 characters')
      .max(16, 'Should be max of 16 characters')
  })

  const generatePasswordString = (values: any) => {
    let characterList = ""

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (values?.isUpperCase) {
      characterList += upperCaseChars
    }
    if (values?.isLowerCase) {
      characterList += lowerCaseChars
    }
    if (values?.isNumber) {
      characterList += digitChars
    }
    if (values?.isSymbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, values?.passwordLength)
    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const handleSubmit = (values: any) => {
    generatePasswordString(values)
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>Password Generator</Text>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              setFieldValue
              /* and other goodies */
            }) => {
              return (
                <>
                  <View style={styles.fieldContainer}>
                    <Text>Password Length</Text>
                    <View>
                      <TextInput
                        keyboardType="numeric"
                        value={values.passwordLength}
                        onChangeText={handleChange('passwordLength')}
                        placeholder="Ex. 8"
                        style={styles.inputStyle}
                      />
                      {touched?.passwordLength && errors?.passwordLength &&
                        <Text style={styles?.errorMsg}>{errors?.passwordLength}</Text>
                      }
                    </View>
                  </View>
                  <View style={styles.fieldContainer}>
                    <Text>Include LowerCase</Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={values?.isLowerCase}
                      onPress={(checked) => setFieldValue('isLowerCase', !values?.isLowerCase)}
                      fillColor="#FED85D"
                    />
                  </View>
                  <View style={styles.fieldContainer}>
                    <Text>Include UpperCase</Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={values?.isUpperCase}
                      onPress={(checked) => setFieldValue('isUpperCase', !values?.isUpperCase)}
                      fillColor="#C9A0DC"
                    />
                  </View>
                  <View style={styles.fieldContainer}>
                    <Text>Include Number</Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={values?.isNumber}
                      onPress={(checked) => setFieldValue('isNumber', !values?.isNumber)}
                      fillColor="#29AB87"
                    />
                  </View>
                  <View style={styles.fieldContainer}>
                    <Text>Include Symbols</Text>
                    <BouncyCheckbox
                      disableBuiltInState
                      isChecked={values?.isSymbols}
                      onPress={(checked) => setFieldValue('isSymbols', !values?.isSymbols)}
                      fillColor="#FC80A5"
                    />
                  </View>

                  <View style={[styles.fieldContainer, styles.btnGrp]}>
                    <TouchableOpacity
                      style={styles.resetBtn}
                      onPress={() => {
                        setIsPassGenerated(false)
                        handleReset()
                      }}
                    >
                      <Text style={styles.btnText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.submitBtn} 
                      onPress={() => handleSubmit()}
                    >
                      <Text style={styles.btnText}>Generate Password</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )
            }}
          </Formik>
        </View>
        {isPassGenerated &&
          <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.subTitle}>Result:</Text>
          <Text style={styles.description}>Long Press to copy</Text>
          <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
        </View>
        }
      </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
    padding: 10
  },
  formHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  fieldContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10
  },
  inputStyle: {
    padding: 8,
    width: 100,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  btnGrp: {
    marginTop: 20
  },
  resetBtn: {
    width: '50%',
    padding: 10,
    borderRadius: 8,
    // marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  submitBtn: {
    width: '50%',
    padding: 10,
    borderRadius: 8,
    // marginHorizontal: 8,
    backgroundColor: '#5DA3FA'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 12
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
})