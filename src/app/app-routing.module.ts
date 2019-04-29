import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DataComponent } from "./data/data.component";
import { HomeComponent } from "./home/home.component";
import { ChartComponent } from "./chart/chart.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "data", component: DataComponent },
  { path: "chart", component: ChartComponent },
  { path: "about", component: HomeComponent },
  { path: "contact", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
