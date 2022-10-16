import React from 'react';
import { Text, View, Image } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants';

const Profile = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-evenly',
            padding: SIZES.base
        }}>
            <View style={{
                borderWidth: 1,
                padding: SIZES.padding * 2.3,
                marginHorizontal: SIZES.body1 * 4.5,
                borderRadius: SIZES.body1 * 6,
                marginBottom: SIZES.base * 0.1,
                borderColor: COLORS.gray

            }}>
                <Image
                    source={
                        icons.Profile
                    }
                // style={{
                //     height: 10,
                //     width: 10,
                //     tintColor: COLORS.red
                //     // deptTeamMobileNo == ''
                //     //     ? COLORS.gray
                //     //     : deptTeamMobileNo != '' && deptTeamMobileNoError == ''
                //     //         ? COLORS.green
                //     //         : COLORS.red,
                // }}
                />
            </View>
            <View style={{ flex: 0.3 }}>
                <View style={{
                    backgroundColor: COLORS.blue,
                    paddingVertical: SIZES.body1 * 0.4,
                    borderRadius: SIZES.base * 0.5,
                    paddingLeft: SIZES.base
                }}>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.body3,
                        textAlign:
                            'left'
                    }}>MY ACCOUNT</Text>
                </View>
                <View style={{
                    flex: 1.3,
                    justifyContent: 'space-between',
                    padding: SIZES.body1 * 0.8,
                }}>
                    <View>
                        <Text style={{
                            ...FONTS.h3
                        }}>Detailed Profile</Text>

                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.lightGray1
                    }}>
                    </View>
                    <View>
                        <Text style={{
                            ...FONTS.h3
                        }}>Change Password</Text>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.lightGray1
                    }}>
                    </View>
                </View>
            </View>
            <View style={{
                flex: 0.5,
                // backgroundColor: COLORS.blue,
            }}>
                <View style={{
                    backgroundColor: COLORS.blue,
                    paddingVertical: SIZES.body1 * 0.4,
                    borderRadius: SIZES.base * 0.5,
                    paddingLeft: SIZES.base
                }}>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.body3,
                        textAlign:
                            'left'
                    }}>USER INFORMATION</Text>
                </View>
                <View style={{
                    flex: 0.8,
                    padding: SIZES.body1 * 0.8,
                    justifyContent: 'space-evenly',
                }}>
                    <View>
                        <Text style={{
                            ...FONTS.h3
                        }}>User Name</Text>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.lightGray1
                    }}>
                    </View>
                    <View>
                        <Text style={{
                            ...FONTS.h3
                        }}>Email</Text>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.lightGray1
                    }}>
                    </View>
                    <View>
                        <Text style={{
                            ...FONTS.h3
                        }}>Contact No</Text>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.lightGray1
                    }}>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Profile