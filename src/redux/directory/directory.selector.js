import { createSelector } from "reselect";

const SelectDirectory = state => state.directory;

export const SelectDirectorySections = createSelector(

    [SelectDirectory],
    directory => directory.sections
);