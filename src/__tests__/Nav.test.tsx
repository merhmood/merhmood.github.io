import React from 'react'
import renderer from 'react-test-renderer'

import { resizeListener } from '../components/Nav';
import Nav from "../components/Nav";


it('testing the nav component width', ()=>{
    const tree = renderer.create(<Nav navLeftSpacing={navLeftSpacingMock}/>)
    expect(tree.toJSON()).toMatchSnapshot()

    function navLeftSpacingMock() {
        return {left: 200}
    }
})
it('testing to check if the resize listener was called correctly',()=>{
    
    const propsStub = {
        navLeftSpacing(){
            return {left: 700}
        }
    }
    const stateDispatchStub = jest.fn()

    let expectValue = resizeListener(propsStub, stateDispatchStub)
    expect(expectValue).toStrictEqual({ left: 700 })
})

it('testing to check if the stateDispatch was called correctly', () => {

    const propsStub = {
        navLeftSpacing() {
            return { left: 300 }
        }
    }

    const stateDispatchMock = jest.fn()

    resizeListener(propsStub, stateDispatchMock)

    const argument = stateDispatchMock.mock.calls[0]
    const calledWithArgument = [{ left: 300 }]
    expect(argument).toEqual(calledWithArgument)
})

it('testing to check if the props navLeftSpacing was called correctly', () => {

    const propsMock = {
        navLeftSpacing: jest.fn(()=> {
            return { left: 300 }      
        })
    }

    const stateDispatchStub = jest.fn()

    resizeListener(propsMock, stateDispatchStub)

    const receivedValue = propsMock.navLeftSpacing.mock.results
    const expectedValue = [{ type: "return", value: { left: 300 } }]
    expect(expectedValue).toEqual(receivedValue)
})