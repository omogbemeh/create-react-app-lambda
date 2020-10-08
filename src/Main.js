import React from 'react'
import {
    multiplicationTable
} from './helpers/multiplicationHelper';

export const Main = () => {

    return (
        <div className='table'>
            <h4>Prime Number Multiplication Table</h4>
            <table id="multiTable">
                <tbody>
                {
                    multiplicationTable(10).map((row, index) => <tr key={index}>
                            {
                                row.map((number, i) => <td key={i}>{number}</td>)
                            }
                        </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}


