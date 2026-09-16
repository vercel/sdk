# DismissedToasts

A record of when, under a certain scopeId, a toast was dismissed

## Example Usage

```typescript
import { DismissedToasts } from "@vercel/sdk/models/authuser.js";

let value: DismissedToasts = {
  dismissals: [
    {
      createdAt: 7281.45,
      scopeId: "<id>",
    },
  ],
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `dismissals`                                   | [models.Dismissals](../models/dismissals.md)[] | :heavy_check_mark:                             | N/A                                            |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |