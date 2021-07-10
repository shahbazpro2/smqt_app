import React, { useState, useEffect } from 'react'
import { Picker } from '@react-native-community/picker';
import csc from './csc.json'
import axios from 'axios';
import publicIp from 'public-ip';
import LocationPicker from './LocationPicker';
import BackWrapper from './BackWrapper';
import { useCallback } from 'react';



function LocationSelect() {
  const [cscData, setCscData] = useState<any>([])
  const [state, setState] = useState({ country: '', region: '', city: '', current: 'country' })

  useEffect(() => {
    let arr: [] = []
    arr = JSON.parse(JSON.stringify(csc))
    setCscData(arr)

    publicIp
      .v4()
      .then((res: any) => {
        //console.log(res);
        axios
          .get(`http://ip-api.com/json/${res}`) //91.195.02.38
          .then((res: any) => {
            //const {ipdata}= res.data;
            const { countryCode, region, city } = res.data
            setState({ country: countryCode, region, city, current: 'city' })


          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [])

  const setStateFun = (value: any, current: any,nextActive:any) => {
    switch (current) {
      case 'country':
        setState({country: value, region: '', city: '',current:nextActive })
        break;
      case 'region':
        setState({ ...state, region: value,current:nextActive });
        break;
      case 'city':
        setState({ ...state, city: value,current:nextActive });
        break;
      default:
        break;
    }

  }
  const setCurrentFun = (val: string) => {
   setState({...state,current:val})
  }

  return (
    <>
      {state.current === 'country' && <LocationPicker value={state.country} current={state.current} nextActive="region" setStateFun={setStateFun} >
        {cscData.map((c: any, i: number) =>
          <Picker.Item key={i} label={c.name} value={c.iso2} />
        )}
      </LocationPicker>}
      {state.current === 'region' &&
        <BackWrapper value="country" setCurrentFun={setCurrentFun}>
          <LocationPicker value={state.region} current={state.current} nextActive="city" setStateFun={setStateFun} >
            <Picker.Item label='Select region...' value='select' />
            {

              cscData.filter((c: any) => c.iso2 === state.country).map((c: any) => (
                c.states.map((s: any, i: any) =>
                  <Picker.Item key={s.id} label={s.name} value={s.state_code} />
                )))
            }

          </LocationPicker>
        </BackWrapper>
      }
      {state.current === 'city' && <BackWrapper value="region" setCurrentFun={setCurrentFun}>
        <LocationPicker value={state.city} current={state.current} nextActive="city" setStateFun={setStateFun} >
          <Picker.Item label='Select city...' value='select' />
          {
            cscData.filter((c: any) => c.iso2 === state.country).map((c: any) => (
              c.states.filter((s: any) => s.state_code === state.region).map((c1: any) => (
                c1.cities.map((city: any) => (
                  <Picker.Item key={city.id} label={city.name} value={city.name} />
                ))))
            ))
          }
        </LocationPicker>
      </BackWrapper>
      }

    </>
  )
}


export default LocationSelect
