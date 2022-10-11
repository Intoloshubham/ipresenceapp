import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { COLORS, FONTS, SIZES } from '../../constants';
import { TextButton, FormInput } from '../../components/index.js';

const UserDashboard = () => {
    const [departmentModal, setDepartmentModal] = useState(false);


    const renderDepartmentModal = () => {
        return (
            <Modal animationType='slide' transparent={true} visible={departmentModal}>
                <View
                    style={{
                        backgroundColor: '#000000aa',
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            padding: 20,
                            borderRadius: 12,
                            margin: 10,
                        }}>
                        <ScrollView>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                    department
                                </Text>
                                <Pressable
                                // onPress={setItemmodal}
                                >
                                    <Text
                                        style={{
                                            alignSelf: 'flex-end',
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                        }}>
                                        X
                                    </Text>
                                </Pressable>
                            </View>

                            <Card>
                                <Card.Content>
                                    <FormInput
                                        label="item name"
                                        onChange={value => {
                                            // setItemname(itemname);
                                        }}
                                    />
                                    <View
                                        style={{
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                        }}>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkGray }}>
                                            Units
                                        </Text>
                                        <TouchableOpacity onPress={() => setunitmodal(true)}>
                                            <Text
                                                style={{
                                                    ...FONTS.body3,
                                                    borderWidth: 1,
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    fontWeight: 'bold',
                                                    borderRadius: 10,
                                                    marginTop: 10,
                                                }}>
                                                Add unit
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* <Dropdown
                                        style={[ { borderColor: 'blue' }]}
                                        // placeholderStyle={styles.placeholderStyle}
                                        // selectedTextStyle={styles.selectedTextStyle}
                                        // inputSearchStyle={styles.inputSearchStyle}
                                        // iconStyle={styles.iconStyle}
                                        // data={data}
                                        search
                                        maxHeight={300}
                                        labelField="unit_name"
                                        valueField="_id"
                                        placeholder={!isFocus ? 'Select unit' : '...'}
                                        searchPlaceholder="Search..."
                                        value={value}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setValue(item._id);
                                            setIsFocus(false);
                                        }}
                                    /> */}

                                    <TextButton
                                        label="Save"
                                        buttonContainerStyle={{
                                            height: 45,
                                            borderRadius: SIZES.radius,
                                            marginTop: SIZES.padding,
                                        }}
                                    // onPress={() => submit()}
                                    />
                                </Card.Content>
                            </Card>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )

    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            <View style={[style.shadow, {
                flex: 1,
                flexDirection: 'row',
                borderWidth: 0.2,
                padding: SIZES.base,
                marginBottom: SIZES.height * 0.5,
                marginHorizontal: SIZES.base * 0.5,
                marginVertical: SIZES.base,
                borderRadius: 2,
                justifyContent: 'flex-end'
            }]}>
                <TextButton
                    label="Add Department"
                    buttonContainerStyle={{
                        height: '13%',
                        width: "36%",
                        borderRadius: SIZES.radius * 0.3,
                        marginTop: SIZES.padding,
                    }}
                    labelStyle={{
                        ...FONTS.h3
                    }}
                    onPress={() => setDepartmentModal(true)}
                />

            </View>
            {renderDepartmentModal()}
        </View>
    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 1.5,
    },
});
export default UserDashboard