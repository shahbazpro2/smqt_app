import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

interface Props {
    itemFun: (arr: any[]) => void,
    items: any[]
}

const styles = StyleSheet.create({
    btnTr: {
        paddingHorizontal: '2%', padding: 9, color: '#009200', fontSize: 18, fontWeight: 'bold', width: undefined
    },
    lessBtnTr: {
        paddingLeft: '4%',
    },
    nextBtnTr: {
        paddingRight: '4%',
    },
    bgBtn: {
        backgroundColor: '#009200', borderRadius: 50, paddingHorizontal: '5%', color: '#fff', fontSize: 18, fontWeight: 'bold', width: undefined
    },
})

function NextsBtn({ items, itemFun }: Props) {
    const [btnVal, setBtnVal] = useState(20)
    const [active, setActive] = useState('next')

    useEffect(() => {
        filterFun()
    }, [btnVal])

    const btnFun = (val: number, type: string) => {
        let num = btnVal + val
        if (num >= items.length) {
            num = items.length
            setActive('less')
        } else if (num <= 20) {
            num = 20
            setActive('next')
        } else{
            setActive(type)
        }
        setBtnVal(num)
    }

    const filterFun = () => {
        let arr: any[] = []
        items.forEach((item, index) => {
            if (index < btnVal) {
                arr.push(item)
            }
        })
        itemFun(arr)
    }


    return (

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
            {
                btnVal <= 20 || btnVal >= items.length ?
                    <TouchableOpacity style={{ alignSelf: 'flex-start', marginHorizontal: 5 }} onPress={() => { active === 'less' ? btnFun(-10, 'less') : btnFun(10, 'next') }}>
                        <Text style={{ ...styles.bgBtn, padding: 10, textAlign: 'center' }}>{btnVal >= items.length ? 'Less 10' : 'Next 10'}</Text>
                    </TouchableOpacity>
                    :
                    <View style={{ backgroundColor: '#fff', flexDirection: 'row', borderRadius: 50, borderColor: '#009200', borderWidth: 1, marginHorizontal: 5 }}>
                        <TouchableOpacity onPress={() => btnFun(-10, 'less')}>
                            {active === 'less' ?
                                <Text style={{ ...styles.bgBtn, padding: 9 }}>{'Less 10'}</Text> :
                                <Text style={{ ...styles.btnTr, paddingLeft: '4%' }}>{'Less'}</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => btnFun(10, 'next')}>
                            {active === 'next' ?
                                <Text style={{ ...styles.bgBtn, padding: 9 }}>{'Next 10'}</Text> :
                                <Text style={{ ...styles.btnTr, paddingRight: '4%' }}>{'Next'}</Text>
                            }
                        </TouchableOpacity>
                    </View>
            }
            <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => { active === 'less' ? btnFun(-20, 'less') : btnFun(20, 'next') }}>
                <Text style={{ ...styles.bgBtn, padding: 10, textAlign: 'center' }}>20</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => { active === 'less' ? btnFun(-30, 'less') : btnFun(30, 'next') }}>
                <Text style={{ ...styles.bgBtn, padding: 10, textAlign: 'center' }}>30</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => { active === 'less' ? btnFun(-(items.length + 20), 'less') : btnFun(items.length - btnVal, 'next') }}>
                <Text style={{ ...styles.bgBtn, padding: 10, textAlign: 'center' }}>All</Text>
            </TouchableOpacity>
        </View>
    )
}


export default React.memo(NextsBtn)