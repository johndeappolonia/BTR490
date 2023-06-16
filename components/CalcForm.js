import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { add } from '@/modules/add';
// Uncomment below when functionality added
// import { subtract } from '@/modules/subtract';
// import { multiply } from '@/modules/multiply';

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
            // Functionality to be added
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