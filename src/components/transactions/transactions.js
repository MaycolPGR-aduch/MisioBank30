import React from 'react';
import './transaction.css'

const Transaction = () => {

  
    return (
      <section>
        <h2>Transacciones Bancarias</h2>

            <ul>
                <li>Transacción 1: $100.00 - Depósito</li>
                <li>Transacción 2: $50.00 - Retiro</li>
                <li>Transacción 3: $120.00 - Transferencia a cuenta X</li>
                <li>Transacción 4: $80.00 - Pago de factura</li>
                <li>Transacción 5: $200.00 - Depósito</li>
            </ul>
      </section>
    );
};

  
export default (Transaction);