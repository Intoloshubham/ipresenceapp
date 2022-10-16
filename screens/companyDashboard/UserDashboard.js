import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    ScrollView,
    Pressable,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Image
} from 'react-native';
import { Card } from 'react-native-paper';
import { COLORS, FONTS, SIZES, icons } from '../../constants';
import { TextButton, FormInput } from '../../components/index.js';
import {
    saveDepartmentName, getDeptName,
    saveDepartmentTeamDetails, getDeptEmployeeDetails
} from '../../controller/DepartmentController';
import { CustomToast } from '../../components/index.js';
import { validateDepartmentInputs } from '../../validator/index.js';
import { FlatList } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import utils from '../../utils/index.js'
import AnimatedInput from '../../components/AnimatedInput';

const UserDashboard = () => {

    Octicons.loadFont();
    const [departmentModal, setDepartmentModal] = useState(false);
    const [departmentName, setDepartmentName] = useState('');
    const [deptNameError, setDeptError] = useState(false);

    const [deptTeamEmpName, setDeptTeamEmpName] = useState('');
    const [deptTeamEmpNameError, setDeptTeamEmpNameError] = useState('');

    const [deptTeamMobileNo, setDeptTeamMobileNo] = useState('');
    const [deptTeamMobileNoError, setDeptMobileNoError] = useState('');

    const [deptTeamDesign, setDeptTeamDesign] = useState('');
    const [deptTeamDesignError, setDeptTeamDesignError] = useState('');

    const [teamCount, setTeamCount] = useState(0);
    const [deptId, setDeptId] = useState('');

    const [getTeamDetails, setGetTeamDetails] = useState('');

    const [submitToast, setSubmitToast] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const [teamModal, setTeamModal] = useState(false);

    const [deptDetails, setDeptDetails] = useState([]);

    const saveDeptName = async () => {
        const body = { departmentName };
        const temp = await saveDepartmentName(body);
        if (temp.status == 200) {
            setSubmitToast(true);
        }
        setDepartmentModal(false);
        getDeptDetail();

        setTimeout(() => {
            setSubmitToast(false);
        }, 2000);
    }

    const saveDeptTeamDetails = async () => {
        const body = { deptTeamEmpName, deptTeamMobileNo, deptTeamDesign };
        const temp = await saveDepartmentTeamDetails(body, deptId);
        if (temp.status == 200) {
            setSubmitToast(true);
        }
        setDepartmentModal(false);
        const resp = await getDeptTeamDetails();
        getDeptDetail();
        setTimeout(() => {
            setSubmitToast(false);
        }, 2000);

    }

    useEffect(() => {
        let refresh = true;

        (async () => {
            if (refresh) {
                getDeptDetail();
                getDeptTeamDetails();
                // const response = await getDeptName();
                // setDeptDetails(response);
            }
        })();

        return () => {
            refresh = false;
        }
    }, [])

    const getDeptDetail = async () => {
        const response = await getDeptName();
        // console.log("🚀 ~ file: UserDashboard.js ~ line 106 ~ getDeptDetail ~ response", response)
        setDeptDetails(response);
    }

    const getDeptTeamDetails = async () => {
        const response = await getDeptEmployeeDetails();
        // console.log("🚀 ~ file: UserDashboard.js ~ line 111 ~ getDeptTeamDetails ~ response", response)
        setGetTeamDetails(response);
    }

    const renderItem = ({ item, index }) => {

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: SIZES.padding * 0.5,
                alignItems: 'center'
            }}>
                <Pressable style={{ flex: 1.4 }}>
                    <Text>{item.department_name}</Text>
                </Pressable>
                <TouchableOpacity style={
                    [{
                        flex: 0.6,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: 1,
                        elevation: 15,
                        backgroundColor: COLORS.white3,
                        borderColor: COLORS.lightGray1,
                        borderRadius: SIZES.base * 0.1,
                        paddingHorizontal: SIZES.base * 0.4,
                        paddingVertical: SIZES.base * 0.5

                    }, style.shadow]
                }
                    onPress={() => {
                        setDepartmentModal(true);
                        setTeamModal(true);
                        setDeptId(item._id);
                    }}
                >
                    <Octicons
                        name='diff-added'
                        color={COLORS.gray}
                        size={16}
                    />

                    <Text style={{
                        color: COLORS.darkGray
                    }}>Add Team</Text>

                </TouchableOpacity>
                <Text style={{
                    color: COLORS.darkGray
                }}>  {item.team_count} </Text>

            </View>)
    }
    const renderDepartmentModal = () => {
        return (
            <Modal animationType='fade' transparent={true} visible={departmentModal}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{
                        backgroundColor: '#000000aa',
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            padding: 20,
                            borderRadius: 5,
                            margin: 10,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            {!teamModal ?
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                    Department
                                </Text>
                                :

                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                    Add Team
                                </Text>


                            }
                            <Pressable
                                onPress={() => setDepartmentModal(false)}
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
                                {!teamModal ?
                                    <FormInput
                                        label="Department Name"
                                        errorMsg={deptNameError}
                                        onChange={value => {
                                            setDepartmentName(value);
                                            utils.validateText(value, setDeptError);

                                        }}
                                        // appendComponent={
                                        //     <View style={{ justifyContent: 'center' }}>
                                        //         <Image
                                        //             source={
                                        //                 departmentName == '' ||
                                        //                     (departmentName != '' && deptNameError == '')
                                        //                     ? icons.correct
                                        //                     : icons.cancel
                                        //             }
                                        //             style={{
                                        //                 height: 20,
                                        //                 width: 20,
                                        //                 tintColor:
                                        //                     departmentName == ''
                                        //                         ? COLORS.gray
                                        //                         : departmentName != '' && deptNameError == ''
                                        //                             ? COLORS.green
                                        //                             : COLORS.red,
                                        //             }}
                                        //         />
                                        //     </View>
                                        // }
                                        onBlur={() => { setDeptError(' ') }}

                                    />

                                    :
                                    <>
                                        <FormInput
                                            label="Employee Name"
                                            errorMsg={deptTeamEmpNameError}
                                            onChange={value => {
                                                setDeptTeamEmpName(value);
                                                utils.validateText(value, setDeptTeamEmpNameError);

                                            }}
                                            appendComponent={
                                                <View style={{ justifyContent: 'center' }}>
                                                    <Image
                                                        source={
                                                            deptTeamEmpName == '' ||
                                                                (deptTeamEmpName != '' && deptTeamEmpNameError == '')
                                                                ? icons.correct
                                                                : icons.cancel
                                                        }
                                                        style={{
                                                            height: 20,
                                                            width: 20,
                                                            tintColor:
                                                                deptTeamEmpName == ''
                                                                    ? COLORS.gray
                                                                    : deptTeamEmpName != '' && deptTeamEmpNameError == ''
                                                                        ? COLORS.green
                                                                        : COLORS.red,
                                                        }}
                                                    />
                                                </View>
                                            }
                                        />
                                        <FormInput
                                            label="Mobile Number"
                                            keyboardType="phone-pad"
                                            autoCompleteType="tel"
                                            errorMsg={deptTeamMobileNoError}
                                            onChange={value => {
                                                setDeptTeamMobileNo(value);
                                                utils.validateNumber(value, setDeptMobileNoError);

                                            }}
                                            appendComponent={
                                                <View style={{ justifyContent: 'center' }}>
                                                    <Image
                                                        source={
                                                            deptTeamMobileNo == '' ||
                                                                (deptTeamMobileNo != '' && deptTeamMobileNoError == '')
                                                                ? icons.correct
                                                                : icons.cancel
                                                        }
                                                        style={{
                                                            height: 20,
                                                            width: 20,
                                                            tintColor:
                                                                deptTeamMobileNo == ''
                                                                    ? COLORS.gray
                                                                    : deptTeamMobileNo != '' && deptTeamMobileNoError == ''
                                                                        ? COLORS.green
                                                                        : COLORS.red,
                                                        }}
                                                    />
                                                </View>
                                            }
                                        />
                                        <FormInput
                                            label="Designation"
                                            errorMsg={deptTeamDesignError}
                                            onChange={value => {
                                                setDeptTeamDesign(value);
                                                utils.validateText(value, setDeptTeamDesignError);

                                            }}
                                            appendComponent={
                                                <View style={{ justifyContent: 'center' }}>
                                                    <Image
                                                        source={
                                                            deptTeamDesign == '' ||
                                                                (deptTeamDesign != '' && deptTeamDesignError == '')
                                                                ? icons.correct
                                                                : icons.cancel
                                                        }
                                                        style={{
                                                            height: 20,
                                                            width: 20,
                                                            tintColor:
                                                                deptTeamDesign == ''
                                                                    ? COLORS.gray
                                                                    : deptTeamDesign != '' && deptTeamDesignError == ''
                                                                        ? COLORS.green
                                                                        : COLORS.red,
                                                        }}
                                                    />
                                                </View>
                                            }
                                        />
                                    </>

                                }
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                    }}>

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

                                {!teamModal ?
                                    <TextButton
                                        label="Save"
                                        buttonContainerStyle={{
                                            height: 45,
                                            borderRadius: SIZES.radius,
                                            marginTop: SIZES.padding,
                                        }}
                                        onPress={() => saveDeptName()}
                                    />
                                    :
                                    <TextButton
                                        label="Save Employee Details"
                                        buttonContainerStyle={{
                                            height: 45,
                                            borderRadius: SIZES.radius,
                                            marginTop: SIZES.padding,
                                        }}
                                        onPress={() => saveDeptTeamDetails()}
                                    />
                                }
                            </Card.Content>
                        </Card>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        )

    }



    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: COLORS.lightGray2 }}>
            <View style={[style.shadow, {
                flex: 1,
                flexDirection: 'column',
                borderWidth: 0.2,
                borderColor: COLORS.white2,
                padding: SIZES.base,
                marginBottom: SIZES.height * 0.5,
                marginHorizontal: SIZES.base * 0.5,
                marginVertical: SIZES.base,
                borderRadius: 2,
                justifyContent: 'space-between',
                alignContent: 'space-around',


            }]}>
                {/* <TextButton
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
                    onPress={() => {
                        setDepartmentModal(true);
                        setTeamModal(false);
                    }}
                /> */}
                <TouchableOpacity
                    style={{
                        borderWidth: 3,
                        width: '36%',
                        color: COLORS.white,
                        borderColor: COLORS.white3,
                        elevation: 10,
                        paddingVertical: SIZES.base * 0.5,
                        borderRadius: SIZES.base * 0.5,
                        paddingHorizontal: SIZES.base,
                        backgroundColor: COLORS.white,
                        shadow: {
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 4.65,
                        },

                    }}
                    onPress={() => {
                        setDepartmentModal(true);
                        setTeamModal(false);
                    }}
                >
                    <Text style={{
                        color: COLORS.black
                    }}>
                        Add Department
                    </Text>
                </TouchableOpacity>
                <View style={[{
                    flex: 1,
                    borderWidth: 5,
                    padding: SIZES.base * 1.2,
                    marginVertical: SIZES.base,
                    borderColor: COLORS.lightGray2,
                    elevation: 20,
                    backgroundColor: COLORS.white2
                }, style.shadow]}>
                    <FlatList
                        data={deptDetails}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => {
                            return (
                                <View
                                    style={{
                                        height: 1,
                                        width: "100%",
                                        marginVertical: SIZES.base,
                                        backgroundColor: COLORS.lightblue_200,
                                    }}
                                />)
                        }}
                    />
                </View>
            </View>

            {renderDepartmentModal()}
            <CustomToast
                isVisible={submitToast}
                onClose={() => setSubmitToast(false)}
                color={COLORS.green}
                title="Dept Name"
                message="Created Successfully..."
            />
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