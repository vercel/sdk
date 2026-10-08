# OneHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFive } from "@vercel/sdk/models/payloadscopes.js";

let value: OneHundredAndFive = {
  gitlabLogin: "<value>",
  gitlabUserId: 1236.74,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitlabLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabUserId`     | *number*           | :heavy_check_mark: | N/A                |