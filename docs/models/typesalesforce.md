# TypeSalesforce

## Example Usage

```typescript
import { TypeSalesforce } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: TypeSalesforce = {
  consumerKey: "<value>",
  consumerSecret: "<value>",
  loginHost: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `consumerKey`                                        | *string*                                             | :heavy_check_mark:                                   | Salesforce connected app consumer key.               |
| `consumerSecret`                                     | *string*                                             | :heavy_check_mark:                                   | Salesforce connected app consumer secret.            |
| `loginHost`                                          | *string*                                             | :heavy_check_mark:                                   | Salesforce login host, such as login.salesforce.com. |