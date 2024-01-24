import { CreatePost } from "./createPost";
import { ListPost } from "./listPost";

export const AllPost = () => {

    return (
        <>
            <div>

                <h2 style={{ marginRight: '10px' }}>Mis Notas</h2>
                <ListPost />
            </div>

        </>
    );
};
