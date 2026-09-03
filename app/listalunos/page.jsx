"use client";
import Header from "../components/header";

export default function ListAluno() {

    return (
        <>
            <Header />
            <h2>Lista de Alunos</h2>
            <table>
                <thead>
                     <th>ID</th>
                     <th>Nome</th>
                     <th>Idade</th>
                     <th>Série</th>
                     <th>RA</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Emanuel</td>
                        <td>17</td>
                        <td>3A</td>
                        <td>23621</td>
                    </tr>
                </tbody>
            </table>

        </>

    )

}