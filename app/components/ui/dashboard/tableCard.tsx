import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"
import TooltipInfo from "../general/TooltipInfo"
import { Fragment } from "react/jsx-runtime"
import { Form } from "@remix-run/react"

type Props = {
    data?: string | any
}

export default function TableCard({ data }: Props) {
    return (
        <>
            {data && data.TableHeader.map((tableHeader: any) => {
                return (
                    <Table className=" border-[#d1d1d1] w-full h-auto">
                        <TableHeader>
                        <TableRow>
                            <TableHead className="hidden">{tableHeader.id}</TableHead>
                            <TableHead>{tableHeader.Name}</TableHead>
                            <TableHead>{tableHeader.Type}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableHeader.Rows.map((rows: any) => {
                            return (
                                <TableRow key={rows.id}>
                                    <TableCell  className="hidden">{rows.id}</TableCell>
                                    {rows.img ? <TableCell  className="flex justify-around items-center">
                                        <img src={rows.img} className="h-8 rounded-md mr-5" alt={rows.Name} />
                                        {rows.Name}
                                    </TableCell> : <TableCell>{rows.Name}</TableCell>}               
                                    <TableCell>{rows.Type}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    </Table>
                )
            })}
        </>
    )
}