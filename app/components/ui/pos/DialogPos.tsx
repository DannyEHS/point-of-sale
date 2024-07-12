import { Button } from "~/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
  } from "~/components/ui/general/Dialog"
  
  type Props = {
    textButton?: string;
    iconContent?: React.ReactElement;
    titleDialog: string;
    descriptionDialog: string;
    children?: React.ReactNode;
  }
export default function DialogPOS({textButton, iconContent, titleDialog, descriptionDialog, children}: Readonly<Props>){
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}>{textButton}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{titleDialog}</DialogTitle>
                    <DialogDescription>
                        {descriptionDialog}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {children}
                </div>
                <DialogFooter>
                    <Button type="submit">Guardar</Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}
