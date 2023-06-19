import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
const add = require('../modules/add')
const multiply = require('../modules/multiply')
// Uncomment below when functionality added
// const subtract = require('../modules/subtract')

export default function CalcForm() {
    
    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            A: 0,
            B: 0, 
            operation: "",
        }
    });
 
    useEffect(() => {
        let data = {
            valueA: 2,
            valueB: 3, 
            operation: "add",
        }

        for(const prop in data){
            setValue(prop, data[prop]);
        }
    }, [])

    function submitForm(e) {
        let result;
        let sign;
        if(e.operation == "add") {
            result = add(e.valueA, e.valueB);
            sign = '+'
        } 
        else if(e.operation == "sub") {
            // Functionality to be added
            sign = '-'
        }
        else if(e.operation == "mult") {
            result = multiply(e.valueA, e.valueB);
            sign = '*'
        }
        alert(`${e.valueA} ${sign} ${e.valueB} = ${result}`)
    }

    return (
        <>
        <form onSubmit={handleSubmit(submitForm)}>
            <input type='number' {...register("valueA")} /> &nbsp;
            <select {...register("operation")}> 
                <option value="add">Add (+)</option>
                <option value="sub">Subtract (-)</option>
                <option value="mult">Multiply (*)</option>
            </select> &nbsp;
            <input type='number' {...register("valueB")} />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}