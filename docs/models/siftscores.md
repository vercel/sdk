# SiftScores

## Example Usage

```typescript
import { SiftScores } from "@vercel/sdk/models/userevent.js";

let value: SiftScores = {
  score: 9472.34,
  reasons: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `score`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `reasons`                                              | [models.PayloadReasons](../models/payloadreasons.md)[] | :heavy_check_mark:                                     | N/A                                                    |