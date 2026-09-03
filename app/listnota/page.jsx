"use client";
import Header from "../components/header";

export default function ListNota() {
    return (
        <>
            <Header />
            <h2>Lista de Notas</h2>
            <table>
                <thead>
                    <th>Aluno</th>
                    <th>T1</th>
                    <th>T2</th>
                    <th>N1</th>
                    <th>N2</th>
                    <th>N3</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Emanuel</td>
                        <td>8.5</td>
                        <td>9.0</td>
                        <td>7.5</td>
                        <td>8.0</td>
                        <td>9.5</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
