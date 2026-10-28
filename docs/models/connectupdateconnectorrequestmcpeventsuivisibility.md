# ConnectUpdateConnectorRequestMcpEventsUiVisibility

MCP Events dashboard visibility. Auto (the default) shows the UI after the first successful delivery. Show and hide persist regardless of future deliveries. This does not enable or disable event delivery.

## Example Usage

```typescript
import { ConnectUpdateConnectorRequestMcpEventsUiVisibility } from "@vercel/sdk/models/connectupdateconnectorrequest.js";

let value: ConnectUpdateConnectorRequestMcpEventsUiVisibility = "hide";
```

## Values

```typescript
"auto" | "show" | "hide"
```