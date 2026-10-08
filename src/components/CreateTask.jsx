import React from 'react'
import { useForm} from 'react-hook-form'

export default function CreateTask() {
  const {handleSubmit, register} = useForm();

  return (
    <form>
        <input type="text" {...register('text')}/>
        <section {...register("status")} id='status'>
            <option value="true">Акт</option>
            <option value="false">Не акт</option>
        </section>
        <input type="date" {...register('data')}/>
        <button type='submit'>Add</button>
    </form>
  )
}
