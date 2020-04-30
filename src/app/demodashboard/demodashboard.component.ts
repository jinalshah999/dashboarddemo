import { Component } from "@angular/core";

@Component({
  selector: "app-demodashboard",
  templateUrl: "./demodashboard.component.html",
  styleUrls: ["./demodashboard.component.css"],
})
export class DemodashboardComponent {
  public pieData: any[] = [
    { category: "0-14", value: 0.2545 },
    { category: "15-24", value: 0.1552 },
    { category: "25-54", value: 0.4059 },
    { category: "55-64", value: 0.0911 },
    { category: "65+", value: 0.0933 },
  ];

  public series: any[] = [
    {
      name: "India",
      data: [
        3.907,
        7.943,
        7.848,
        9.284,
        9.263,
        9.801,
        3.89,
        8.238,
        9.552,
        6.855,
      ],
    },
    {
      name: "Russian Federation",
      data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3],
    },
    {
      name: "Germany",
      data: [
        0.01,
        -0.375,
        1.161,
        0.684,
        3.7,
        3.269,
        1.083,
        -5.127,
        3.69,
        2.995,
      ],
    },
    {
      name: "World",
      data: [
        1.988,
        2.733,
        3.994,
        3.464,
        4.001,
        3.939,
        1.333,
        -2.245,
        4.339,
        2.727,
      ],
    },
  ];
  public categories: number[] = [
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
  ];
}
