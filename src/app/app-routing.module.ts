import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotesComponent } from "./notes/notes/notes.component";
import { NoteDetailsComponent } from "./notes/note-details/note-details.component";

const routes: Routes = [
    { path: "notes", component: NotesComponent },
    { path: "notes/:noteId", component: NoteDetailsComponent },
    { path: "", redirectTo: "notes", pathMatch: "full" },
    { path: "**", redirectTo: "notes" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
