// export interface BookInfo {
//   id: string;
//   title : string;
//   suthor : string;
//   pulished : string;
// }

import {IsNotEmpty } from 'class-validator'


export class BookInfo{

@IsNotEmpty({message: 'Please enter a valid name'}) 
id:string;
title:string;
author:string;
published:string;
  name: any;
  filename: string;
}


export class BookUpdateInfo{

  @IsNotEmpty({message: 'Please enter a valid name'}) 
  id:string;
  title:string;
  author:string;
  published:string;
  }
  
