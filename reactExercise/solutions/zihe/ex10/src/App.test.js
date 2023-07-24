import { mergeArray } from "./App";
import App from "./App";
import '@testing-library/jest-dom'
import { fireEvent,render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('MergeArray',()=>{
    test('common case',()=>{
        expect(mergeArray([1,5,8,3,1,5,2],[4,7,2,1,6,2,4])).toEqual([1,2,3,4,5,6,7,8])
    })
    test('base case',()=>{
        expect(mergeArray([0,0,0],[0,0,0])).toEqual([0])
    })
    test('edge case',()=>{
        expect(mergeArray([],[1])).toEqual([1])
        expect(mergeArray([],[])).toEqual([])
    })
})
describe('User Interaction',()=>{
    test('loads',async()=>{
        render(<App/>)
        const text=await screen.findByText(/Array A/)
        expect(text).toBeInTheDocument()
    })
    test('renders input',async()=>{
        render(<App/>)
        const inputs=await screen.findAllByRole('textbox')
        expect(inputs).toHaveLength(2)
    })
    test('enter in input',async()=>{
        render(<App/>)
        const inputs=screen.getAllByRole('textbox')
        const firstInput=inputs[0]
        const secondInput=inputs[1]
        fireEvent.change(firstInput,{target:{valueAsString:'2,4,32,1'}})
        expect(firstInput.valueAsString).toBe('2,4,32,1')
        fireEvent.change(secondInput,{target:{valueAsString:'6,34,1,88'}})
        expect(secondInput.valueAsString).toBe('6,34,1,88')
    })
    test('result', async () => {
        render(<App />)
        const inputs = screen.getAllByRole('textbox')
        const firstInput = inputs[0]
        const secondInput = inputs[1]
        fireEvent.change(firstInput, { target: { value: '2,4,32,1' } })
        fireEvent.change(secondInput, { target: { value: '6,34,1,88' } })
        userEvent.click(screen.getByText('Merge'))
        const results='1,2,4,6,32,34,88'
        expect(await screen.findByText(results)).toBeInTheDocument()
    })
})