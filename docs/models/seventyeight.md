# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/usereventpayload70project.js";

let value: SeventyEight = {
  gitlabLogin: "<value>",
  gitlabUserId: 9969.53,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitlabLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabUserId`     | *number*           | :heavy_check_mark: | N/A                |