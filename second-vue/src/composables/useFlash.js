import swal from "sweetalert"
export function useFlash(){
    function flash(msg){
        return swal('Success!', msg, 'success') 
    }

    return {flash}
}