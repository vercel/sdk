# Sixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Sixteen } from "@vercel/sdk/models/payloadaction.js";

let value: Sixteen = {
  boardId: "<id>",
  channelId: "<id>",
  environment: "<value>",
  operationId: "<id>",
  projectId: "<id>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `boardId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `channelId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `environment`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `name`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | Left out when the board no longer lets the team in, though its log still shows the board. |
| `operationId`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `projectId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `userId`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |