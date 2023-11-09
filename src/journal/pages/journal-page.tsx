import {Typography} from "@mui/material";
import {JournalLayout} from "../layout/journal-layout.tsx";
import {NothingSelectView} from "../views";


export const JournalPage = () => {
    return (
        <JournalLayout>
            <Typography>Journal Page...</Typography>
            <NothingSelectView></NothingSelectView>

        </JournalLayout>
    )
}