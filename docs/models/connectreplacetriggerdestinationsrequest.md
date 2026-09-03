# ConnectReplaceTriggerDestinationsRequest

Complete replacement set of trigger destinations.

## Example Usage

```typescript
import { ConnectReplaceTriggerDestinationsRequest } from "@vercel/sdk/models/connectreplacetriggerdestinationsrequest.js";

let value: ConnectReplaceTriggerDestinationsRequest = {
  destinations: [],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `destinations`                                                                                                                                                           | *models.ConnectTriggerDestinationInput*[]                                                                                                                                | :heavy_check_mark:                                                                                                                                                       | Complete replacement set of trigger destinations. An empty array removes all destinations. Connector get and list responses expose the saved set as triggerDestinations. |