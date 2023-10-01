
import { Button, Loading } from "./style";


export default function ButtonSubmit({ handleSubmit, loading, children }) {
    return (
        <Button onClick={handleSubmit} disabled={loading}>
            {loading ? <Loading /> : children}
        </Button>
    )
}