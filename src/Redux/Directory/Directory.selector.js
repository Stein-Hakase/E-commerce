import {createSelector} from 'reselect'
const directorySelecor =state=>state.directory
export const selectDirectorySections=createSelector (
    [directorySelecor],
    (directory)=>directory.sections
)