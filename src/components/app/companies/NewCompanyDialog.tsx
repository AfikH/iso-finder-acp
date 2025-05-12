import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const NewCompanyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"} className="cursor-pointer">
          <Plus />
          New Company
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Company</DialogTitle>
          <DialogDescription>Carefully insert new company data and accept to create a new company.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewCompanyDialog;
