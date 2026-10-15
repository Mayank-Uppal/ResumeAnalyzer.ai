import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo({open,setOpen}:{open:boolean,setOpen:React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Welcome to Resume Analyzer.ai</DialogTitle>
            <DialogDescription>
              Enter your name and email to get a one-time password (OTP) and
            start optimizing your resume.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" placeholder="John Doe"/>
            </Field>
            <Field>
              <Label htmlFor="username-1">Email</Label>
              <Input id="username-1" name="email" defaultValue="" placeholder="resumoai@gmail.com" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button className='px-4' type="submit">Get Otp</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
