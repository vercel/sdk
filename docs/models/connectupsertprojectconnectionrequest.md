# ConnectUpsertProjectConnectionRequest

Environments enabled for a connector project connection.

## Example Usage

```typescript
import { ConnectUpsertProjectConnectionRequest } from "@vercel/sdk/models/connectupsertprojectconnectionrequest.js";

let value: ConnectUpsertProjectConnectionRequest = {
  environments: [],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `environments`                                                                                                                                 | *models.Environments*[]                                                                                                                        | :heavy_check_mark:                                                                                                                             | One or more built-in environment names or stable custom environment IDs that belong to the project. Duplicate values are accepted and removed. |