export function Toaster() { return null; }
export function toast() {}
toast.success = () => {};
toast.error   = () => {};
toast.info    = () => {};
toast.warning = () => {};
toast.loading = () => {};
toast.dismiss = () => {};
toast.promise = () => {};
export default toast;
