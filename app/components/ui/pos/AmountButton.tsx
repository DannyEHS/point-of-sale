import { Button } from "~/components/ui/button"

type Props = {
    value?: number;
    children: React.ReactNode;
    className: string;
  };

  export default function AmountButton({ children, value, className }: Props) {
    return(
        <Button value={value} className={className}>
            {children}
        </Button>
    )
  }