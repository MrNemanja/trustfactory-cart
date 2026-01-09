<h1>Daily Sales Report for {{ $date }}</h1>

@if(count($sales) === 0)
    <p>No sales for this day.</p>
@else
    <table border="1" cellpadding="5" cellspacing="0">
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity Sold</th>
                <th>Price per Unit</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach($sales as $sale)
                <tr>
                    <td>{{ $sale->product->name }}</td>
                    <td>{{ $sale->quantity }}</td>
                    <td>${{ number_format($sale->price, 2) }}</td>
                    <td>${{ number_format($sale->quantity * $sale->price, 2) }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endif