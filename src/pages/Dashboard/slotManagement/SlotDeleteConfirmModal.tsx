import { IoTrashOutline } from "react-icons/io5";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../../../components/ui/button";
import toast from "react-hot-toast";
import { useSlotDeleteMutation } from "@/redux/features/slot/slotApi";

type TDeleteConfirmModal = {
  slotId: string;
};

export default function SlotDeleteConfirmModal({
  slotId,
}: TDeleteConfirmModal) {
  const [slotDelete] = useSlotDeleteMutation();

  const handleDelete = async () => {
    try {
      const res: any = await slotDelete(slotId);

      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Slot Delete Successfully");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[30px] h-[30px] text-white dark:bg-red-600 bg-red-500 hover:dark:bg-red-400 hover:bg-red-700 rounded-full flex items-center justify-center cursor-pointer">
          <IoTrashOutline className="text-base" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <div className="text-lg text-center text-color-heading font-semibold dark:text-white">
              Do you really want to delete this?
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="text-center mt-5">
              <div className="flex items-center gap-3 justify-center">
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="bg-red-600 text-white hover:bg-red-500 "
                    // onClick={() => setIsDeleting(true)}
                    onClick={handleDelete}
                  >
                    {"Delete"}
                  </Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button size="sm">Cancel</Button>
                </DialogTrigger>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
      </DialogContent>
    </Dialog>
  );
}
