# Expiration

Schedules the project for automatic deletion after the given timeframe.

## Example Usage

```typescript
import { Expiration } from "@vercel/sdk/models/createprojecthasprojectsvalue.js";

let value: Expiration = {
  timeframe: "2-week",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `timeframe`                                                     | [models.Timeframe](../models/timeframe.md)                      | :heavy_check_mark:                                              | How far in the future the project will be automatically deleted |